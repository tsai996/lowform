import type { PropType, Ref, VNode } from 'vue'
import Draggable from '@xfc/vue3-draggable'
import { CopyDocument, Delete, Rank } from '@element-plus/icons-vue'
import './index.scss'
import { cloneDeep } from 'lodash-es'
import { type FormField } from '@xfc/vue3-form-render'
import { Render } from '@/components/FormParser/context'

export default defineComponent({
  props: {
    field: {
      type: Object as PropType<FormField>,
      required: true
    }
  },
  setup(props) {
    interface FieldContext {
      field: FormField
      index: number
      list: FormField[]
      parent: FormField
    }

    const { activeData } = inject<{
      activeData: Ref<FormField>
    }>('formDesign')!
    const renders: Recordable<(context: FieldContext) => VNode> = {
      Form: (context: FieldContext): VNode => {
        const { field } = context
        const active = activeData.value?.id === field.id
        const className = ['editor-form', { 'is-active': active }]
        const child = field.children?.map((item, index) =>
          renderItem({ field: item, index, list: field.children ?? [], parent: field })
        )
        return (
          <el-form
            label-position={field.props.labelPosition}
            disabled={field.readonly}
            label-width={`${field.props.labelWidth}px`}
            size={field.props.size}
            class={className}
            onClick={(event: MouseEvent) => {
              activeData.value = field
              event.stopPropagation()
            }}
          >
            <Draggable
              modelValue={field.children ?? []}
              onUpdate:modelValue={(val: FormField[]) => (field.children = val)}
              options={{
                group: 'componentsGroup',
                handle: '.pointer-move',
                animation: 340
              }}
              onAdd={(element) => (activeData.value = element)}
              class="drawing-board p5px"
            >
              {child}
            </Draggable>
          </el-form>
        )
      },
      formItem: (context: FieldContext): VNode => {
        const { field } = context
        const active = activeData.value?.id === field.id
        const className = ['drawing-item', { active: active }, { is_hidden: field.hidden }]
        const child = renderChildren(field)
        return (
          <div
            class={className}
            onClick={(event: MouseEvent) => {
              activeData.value = field
              event.stopPropagation()
            }}
          >
            <el-form-item
              label={field.hideLabel ? undefined : field.label}
              required={field.required}
              labelWidth={field.hideLabel ? '0px' : undefined}
              class="field-wrapper"
            >
              <Render
                key={field.props.key}
                field={field}
                modelValue={field.value}
                onUpdate:modelValue={(val) => {
                  if (field.readonly) return
                  field.value = val
                }}
              >
                {child}
              </Render>
            </el-form-item>
            {active ? renderTool(context) : null}
          </div>
        )
      },
      container: (context: FieldContext): VNode => {
        const { field } = context
        const active = activeData.value?.id === field.id
        const className = ['drawing-item', { active: active }, { is_hidden: field.hidden }]
        const containers: string[] = ['Tab', 'Collapse', 'Row']
        const child = containers.includes(field.name) ? renderInner(field) : renderChildren(field)
        return (
          <div
            class={className}
            onClick={(event: MouseEvent) => {
              activeData.value = field
              event.stopPropagation()
            }}
          >
            <div class="field-wrapper">
              <Render
                key={field.props.key}
                field={field}
                modelValue={field.value}
                onUpdate:modelValue={(val) => {
                  field.value = val
                }}
              >
                {child}
              </Render>
            </div>
            {active ? renderTool(context) : null}
          </div>
        )
      }
    }
    const tools: Recordable<(context: FieldContext) => VNode> = {
      move: (_) => {
        return (
          <div class="pointer-move">
            <el-icon size={15}>
              <Rank />
            </el-icon>
          </div>
        )
      },
      copy: (context) => {
        const { field, index, list } = context
        return (
          <div
            onClick={(event: MouseEvent) => {
              const clone = cloneDeep(field)
              const generateId = (clone: FormField) => {
                clone.id = `field_${Math.random().toString(36).substring(2, 7)}`
                clone.children?.forEach((el) => generateId(el))
              }
              generateId(clone)
              list.splice(index + 1, 0, clone)
              activeData.value = clone
              event.stopPropagation()
            }}
          >
            <el-icon size={14}>
              <CopyDocument />
            </el-icon>
          </div>
        )
      },
      del: (context) => {
        const { index, list, parent } = context
        return (
          <div
            onClick={(event: MouseEvent) => {
              list.splice(index, 1)
              const len = list.length
              if (len > 0) {
                if (index < len) {
                  activeData.value = list[index]
                } else {
                  activeData.value = list[index - 1]
                }
              } else {
                activeData.value = parent
              }
              event.stopPropagation()
            }}
          >
            <el-icon size={14}>
              <Delete />
            </el-icon>
          </div>
        )
      }
    }
    const renderTool = (context: FieldContext) => {
      return [
        tools.move(context),
        <div class="pointer-wrapper">
          {tools.copy(context)}
          {tools.del(context)}
        </div>
      ]
    }
    const renderItem = (context: FieldContext): VNode => {
      const { field } = context
      const render = renders[field.name] || renders[field.type]
      if (render) {
        return render(context)
      }
      return <span style={{ color: 'red' }}>{`No rendering found for ${field.id}`}</span>
    }
    const renderChildren = (field: FormField): VNode | undefined => {
      if (field.children) {
        const items = field.children.map((item, index) =>
          renderItem({ field: item, index, list: field.children ?? [], parent: field })
        )
        return (
          <Draggable
            modelValue={field.children}
            onUpdate:modelValue={(val: FormField[]) => (field.children = val)}
            options={{
              group: 'componentsGroup',
              handle: '.pointer-move',
              animation: 340
            }}
            onAdd={(element) => (activeData.value = element)}
            class="widget-list drawing-board"
          >
            {items}
          </Draggable>
        )
      }
    }
    const renderInner = (field: FormField) => {
      return field.children?.map((el: FormField) => {
        return (
          <Render
            key={el.props.key}
            field={el}
            modelValue={el.value}
            onUpdate:modelValue={(val) => (el.value = val)}
          >
            {{
              default: () => renderChildren(el)
            }}
          </Render>
        )
      })
    }
    return () => {
      const { field } = props
      return (
        <div class="drawing-board">
          {renderItem({
            field,
            index: 0,
            list: [],
            parent: field
          })}
        </div>
      )
    }
  }
})
