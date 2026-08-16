export type Stat = {
  number: string
  label: string
}

export type Service = {
  icon: string
  title: string
  text: string
}

export const navItems = ['Services', 'Gallery', 'Reviews', 'Location']

export const stats: Stat[] = [
  { number: '12+', label: 'Years shaping fades' },
  { number: '4.9/5', label: 'Client rating' },
  { number: '7am-7pm', label: 'Open daily' },
]

export const services: Service[] = [
  {
    icon: '✂️',
    title: 'Signature Cut',
    text: 'Precision scissor work and clean fade lines finished with a tailored hot towel.',
  },
  {
    icon: '🧔',
    title: 'Beard Sculpt',
    text: 'Balanced beard shaping, detailing, and conditioning designed for your face shape.',
  },
  {
    icon: '💈',
    title: 'VIP Grooming',
    text: 'Full-service package with a wash, cut, shave, and a straight razor finish.',
  },
]
