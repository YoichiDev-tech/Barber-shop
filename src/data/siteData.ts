export type Service = {
  icon: string
  title: string
  text: string
}

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Our approach', href: '#story' },
]

export const services: Service[] = [
  {
    icon: 'scissors',
    title: 'Signature Cut',
    text: 'Precision scissor work and clean fade lines finished with a tailored hot towel.',
  },
  {
    icon: 'beard',
    title: 'Beard Sculpt',
    text: 'Balanced beard shaping, detailing, and conditioning designed for your face shape.',
  },
  {
    icon: 'razor',
    title: 'VIP Grooming',
    text: 'A full-service grooming concept with a wash, cut, shave, and straight-razor finish.',
  },
]
