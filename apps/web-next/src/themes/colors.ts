const bluePallet = {
  blue1: '#0D3356',
  blue2: '#1D364D',
  blue3: '#3A4980',
  blue4: '#4F547B',
  blue5: '#6A7A99',
}

const purplePallet = {
  purple1: '#101F37',
  purple2: '#1A064F',
  purple3: '#6440FB',
  purple4: '#BBC1F8',
  purple5: '#5F6791',
}

const greyPallet = {
  grey1: '#726C6C',
  grey2: '#A3A3A3',
  grey3: '#6E7682',
}

const whitePallet = {
  white1: '#FFFFFF',
  white2: '#F3F3F3',
  white3: '#EDF0F8',
  white4: '#EBEDEC',
}

const blackPallet = {
  black1: '#000000',
  black2: '#0C0C0C',
  black3: '#120F07',
  black4: '#141213',
}

const greenPallet = {
  green1: '#37853A',
  green2: '#BBD278',
  green3: '#98C185',
}

const yellowPallet = {
  yellow1: '#A06422',
  yellow2: '#FDB022',
  yellow3: '#FDF7F2',
}

const redPallet = {
  red1: '#CF3930',
  red2: '#FFD3F8',
  red3: '#FFF5F5',
}

export const backgroundImage = {
  'linear-purple':
    'linear-gradient(75.04deg, #F4E8F3 0%, #F3EFF6 52.07%, #EEE0F9 102.02%)',
  'linear-black-green':
    'linear-gradient(75.04deg, #51c0c05c, #0c0e24eb 52.07%, #051f0bc2 70.02%)',
  'linear-blue': 'linear-gradient(136.22deg, #3A4980 2.59%, #2c307933 97.48%)',
  'linear-white': 'linear-gradient(136.22deg, #ffffff 2.59%, #2c307933 97.48%)',
  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  'gradient-conic':
    'conic-gradient(from 90deg at 50% 50%,  #98C185 180deg, #FFB6B6 180deg)',
}

export const colors = {
  ...bluePallet,
  ...purplePallet,
  ...greyPallet,
  ...greenPallet,
  ...yellowPallet,
  ...redPallet,
  ...whitePallet,
  ...blackPallet,
} as const
