import { compose, EnhancerBuilder } from '@uniformdev/canvas'
import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from '@uniformdev/canvas-contentful'
import { contentfulEnhancer } from './contentful/contentfulEnhancer'
import { blogPostEnhancer } from './contentful/blogPostEnhancer'
import { talkEnhancer } from './contentful/talkEnhancer'
import { listEnhancer } from './contentful/listEnhancer'
import { latestItemEnhancer } from './contentful/latestItemEnhancer'
import { contentfulModelConverter } from './contentful/contentfulModelConverter'
import { contentfulRichTextToHtmlEnhancer } from './contentful/contentfulRichTextToHtmlEnhancer'

export const enhancers = new EnhancerBuilder()
  .component('latestBlogposts', (latestBlogposts) =>
    latestBlogposts.data('posts', blogPostEnhancer)
  )
  .component('latestTalks', (latestTalks) =>
    latestTalks.data('talks', talkEnhancer)
  )
  .component('latestItem', (latestItem) =>
    latestItem.data('item', latestItemEnhancer)
  )
  .component('list', (list) => list.data('list', listEnhancer))
  .parameterType(
    CANVAS_CONTENTFUL_PARAMETER_TYPES,
    compose(
      contentfulEnhancer(),
      contentfulRichTextToHtmlEnhancer,
      contentfulModelConverter
    )
  )
