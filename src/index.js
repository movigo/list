import { addPlugin } from '@movigo/core'

addPlugin(function list(elements, parameters, values) {
  values = {
    x: 0, y: 100,
    duration: .3,
    ...values
  }

  elements.forEach(function (element) {
    element.style.transform = `translate(${values.x}px, ${values.y}px)`
    element.style.opacity = '0'
  })

  parameters.duration = values.duration
  parameters.easing = 'cubic-bezier(0.0, 0.0, 0.2, 1)'
  parameters.delay = Array.from(elements).map((element, i) => i * values.duration / 3)
  parameters.to = { opacity: 1, transform: 'translateY(0px)' }
})