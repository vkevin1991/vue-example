import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  const createComponent = () => {
    const PostContructor = Vue.extend(Post)
    const comp = new PostContructor({
      propsData: {
        link: 'https://www.pluralsight.com'
      }
    }).$mount()
    return comp
  }
  it('should render the link', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('https://www.pluralsight.com')
  })

  it('should update element\'s href when properly link changes', (done) => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('https://www.pluralsight.com')

    comp.link = 'https://www.fullstackweekly.com'
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal('https://www.fullstackweekly.com')
      done()
    })
  })
})
