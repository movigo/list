import { addPlugin } from '@movigo/core'

/**
 * Prepare animation parameters to create a list animation.
 * @param {Element[] | NodeList} elements
 * @param {object} parameters
 * @param {object} options
 */
function list (elements, parameters, options) {
  options = {
    x: 0, y: 100,
    duration: .3,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    ...options
  }

  for (const element of elements) {
    element.style.transform = `translate(${options.x}px, ${options.y}px)`
    element.style.opacity = '0'
  }

  parameters.duration = options.duration
  parameters.easing = options.easing
  parameters.delay = Array.from(elements).map((element, i) => i * options.duration / 3)
  parameters.to = { opacity: 1, transform: 'translateY(0px)' }
}

addPlugin(list)