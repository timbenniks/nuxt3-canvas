import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export const contentfulRichTextToHtmlEnhancer = ({ parameter }) => {
  if (typeof parameter.value?.fields !== 'object') {
    return parameter.value
  }

  Object.entries(parameter.value?.fields ?? {}).forEach(([key, value]) => {
    if (
      typeof value === 'object' &&
      'nodeType' in value &&
      value.nodeType === 'document'
    ) {
      parameter.value.fields[key] = documentToHtmlString(value, {
        renderNode: {
          [BLOCKS.LIST_ITEM]: (node, next) =>
            `<li>${next(node.content).replace(/<[^>]*>/g, '')}</li>`,
        },
      })
    }
  })

  return parameter.value
}
