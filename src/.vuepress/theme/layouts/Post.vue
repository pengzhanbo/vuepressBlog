<template>
  <div id="vuperess-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content">
      <h3>{{$page.frontmatter.title}}</h3>
      <Tags :tags="$page.frontmatter.tags || []" />
      <Content/>
      <hr/>
      <Comment/>
    </div>
    <Toc/>
  </div>
</template>

<script>
  import Toc from '@theme/components/Toc.vue'
  import { Comment } from '@vuepress/plugin-blog/lib/client/components'
  import Tags from '../components/Tags.vue';
  export default {
    components: {
      Toc,
      Comment,
      Tags
    },
  }
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

  .vuepress-blog-theme-content
    @extend $wrapper
    font-size 16px
    letter-spacing 0px
    font-family PT Serif, Serif
    color #2c3e50
    position relative

    @media(min-width: $MQNarrow)
      box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.07)
  
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

