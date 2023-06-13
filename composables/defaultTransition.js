import { gsap } from 'gsap'
import { useA11yStore } from '~/stores/a11y'

const disablePageTransitions = false // process.dev

export const DEFAULT_DURATION = 0.3
const duration = disablePageTransitions ? 0 : DEFAULT_DURATION

export const DURATION_IN_MS = DEFAULT_DURATION * 1000

export const defaultTransition = disablePageTransitions
  ? {}
  : {
      mode: 'out-in',

      onEnter (el, onComplete) {
        const a11yStore = useA11yStore()

        if (a11yStore.reducedMotion) {
          return gsap.from(el, { opacity: 0, ease: 'none', duration, onComplete })
        }

        return gsap.timeline({ onComplete, defaults: { ease: 'none', duration } })
          .from(el, { opacity: 0 }, '<')
          .set(el, { clearProps: true })
      },

      onLeave (el, onComplete) {
        const a11yStore = useA11yStore()

        if (a11yStore.reducedMotion) {
          return gsap.to(el, { opacity: 0, ease: 'none', duration, onComplete })
        }

        gsap.timeline({ onComplete, defaults: { ease: 'none', duration } })
          .to(el, { opacity: 0 }, '<')
      },
    }

export default defaultTransition
