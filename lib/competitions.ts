// TODO: Replace static data with Supabase fetch
// e.g. const { data } = await supabase.from('competitions').select('*').eq('status', 'active')

export interface BulkPricingTier {
  quantity: number
  price: number
  pricePerTicket: number
  saving: number
  label?: string
  popular?: boolean
}

export interface SkillQuestion {
  question: string
  options: string[]
  // TODO: Move answer validation to server-side API route before launch.
  // correctIndex should never be read directly in client render logic —
  // it is only used at the point of validation and should be passed to
  // a server action / API route in production.
  _ci: number // deliberately non-descriptive: this is the correct option index
}

export interface Competition {
  id: string
  title: string
  creatorHandle: string
  creatorAvatar: string // placeholder initials
  prizeValue: number
  ticketPrice: number
  totalTickets: number
  ticketsSold: number
  drawDate: string // ISO date string
  category: 'watches' | 'fashion' | 'sneakers' | 'jewellery' | 'electronics' | 'streetwear'
  description: string
  verified: boolean
  status: 'active' | 'completed' | 'cancelled'
  viewerCount: number // mock: people currently viewing
  // TODO: Replace with real-time Supabase subscription in production
  recentEntrants: string[] // mock: first names of recent buyers
  bulkPricing: BulkPricingTier[]
  skillQuestion: SkillQuestion
}

// Dates relative to 2026-04-09 (today)
export const COMPETITIONS: Competition[] = [
  {
    id: 'rolex-sub-001',
    title: 'Rolex Submariner Date',
    creatorHandle: '@alexwatches',
    creatorAvatar: 'AW',
    prizeValue: 9500,
    ticketPrice: 15,
    totalTickets: 1000,
    ticketsSold: 847,
    drawDate: '2026-04-12T20:00:00Z',
    category: 'watches',
    description:
      'An iconic Rolex Submariner Date in Oystersteel with a black Cerachrom bezel. Ref. 126610LN. Purchased new from an authorised dealer, complete with original box and papers.',
    verified: true,
    status: 'active',
    viewerCount: 23,
    // TODO: viewerCount and recentEntrants should come from real-time Supabase subscriptions in production
    recentEntrants: ['James', 'Sophie', 'Marcus', 'Ella', 'Tom'],
    bulkPricing: [
      { quantity: 1,  price: 15,  pricePerTicket: 15,   saving: 0  },
      { quantity: 5,  price: 70,  pricePerTicket: 14,   saving: 5  },
      { quantity: 10, price: 130, pricePerTicket: 13,   saving: 20, popular: true },
      { quantity: 25, price: 300, pricePerTicket: 12,   saving: 75, label: 'Best value' },
    ],
    skillQuestion: {
      question: 'In which country is Rolex headquartered?',
      options: ['France', 'Switzerland', 'Germany', 'Italy'],
      _ci: 1,
    },
  },
  {
    id: 'lv-neverfull-002',
    title: 'Louis Vuitton Neverfull MM',
    creatorHandle: '@sophiestyle',
    creatorAvatar: 'SS',
    prizeValue: 1200,
    ticketPrice: 8,
    totalTickets: 500,
    ticketsSold: 312,
    drawDate: '2026-04-15T20:00:00Z',
    category: 'fashion',
    description:
      'The Louis Vuitton Neverfull MM in Monogram canvas with Rose Ballerine interior. A timeless everyday tote, brand new with dust bag, box, and receipt.',
    verified: true,
    status: 'active',
    viewerCount: 11,
    // TODO: viewerCount and recentEntrants should come from real-time Supabase subscriptions in production
    recentEntrants: ['Chloe', 'Ava', 'Priya', 'Lauren'],
    bulkPricing: [
      { quantity: 1,  price: 8,   pricePerTicket: 8,    saving: 0  },
      { quantity: 5,  price: 36,  pricePerTicket: 7.20, saving: 4  },
      { quantity: 10, price: 68,  pricePerTicket: 6.80, saving: 12, popular: true },
      { quantity: 25, price: 155, pricePerTicket: 6.20, saving: 45, label: 'Best value' },
    ],
    skillQuestion: {
      question: 'Louis Vuitton is a fashion house based in which city?',
      options: ['Milan', 'London', 'Paris', 'New York'],
      _ci: 2,
    },
  },
  {
    id: 'nike-sb-dunk-003',
    title: 'Nike SB Dunk Low Pro',
    creatorHandle: '@marcokicks',
    creatorAvatar: 'MK',
    prizeValue: 650,
    ticketPrice: 5,
    totalTickets: 300,
    ticketsSold: 189,
    drawDate: '2026-04-11T20:00:00Z',
    category: 'sneakers',
    description:
      'A sought-after Nike SB Dunk Low Pro colourway, deadstock in size UK 9 / US 10. Comes in original box with extra laces. Verified authentic.',
    verified: true,
    status: 'active',
    viewerCount: 34,
    // TODO: viewerCount and recentEntrants should come from real-time Supabase subscriptions in production
    recentEntrants: ['Tyler', 'Jordan', 'Kai', 'Zara', 'Leo', 'Mia'],
    bulkPricing: [
      { quantity: 1,  price: 5,  pricePerTicket: 5,    saving: 0  },
      { quantity: 5,  price: 22, pricePerTicket: 4.40, saving: 3  },
      { quantity: 10, price: 40, pricePerTicket: 4,    saving: 10, popular: true },
      { quantity: 25, price: 90, pricePerTicket: 3.60, saving: 35, label: 'Best value' },
    ],
    skillQuestion: {
      question: 'Nike is headquartered in which US state?',
      options: ['California', 'Oregon', 'Washington', 'New York'],
      _ci: 1,
    },
  },
]

export function getCompetitionById(id: string): Competition | undefined {
  return COMPETITIONS.find((c) => c.id === id)
}
