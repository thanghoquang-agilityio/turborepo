import type { Meta, StoryObj } from '@storybook/react'
import { InView } from './in-view'

const meta: Meta<typeof InView> = {
  title: 'NextUI/InView',
  component: InView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="bg-blue-100 p-8 text-center rounded-lg">
        <h2 className="text-2xl font-bold text-blue-800">I'm in view!</h2>
        <p className="text-blue-600 mt-2">This content is monitored by IntersectionObserver</p>
      </div>
    ),
  },
}

export const WithCustomClass: Story = {
  args: {
    className: "border-2 border-dashed border-gray-300 p-4 rounded-lg",
    children: (
      <div className="bg-green-100 p-6 text-center rounded">
        <h3 className="text-xl font-semibold text-green-800">Custom Styled Container</h3>
        <p className="text-green-600">With border and padding from className</p>
      </div>
    ),
  },
}

export const MultipleElements: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Scroll down to see InView components</p>
      </div>
      
      <InView>
        <div className="bg-red-100 p-6 text-center rounded-lg">
          <h3 className="text-xl font-bold text-red-800">First InView Element</h3>
          <p className="text-red-600">This will trigger when scrolled into view</p>
        </div>
      </InView>
      
      <div className="h-64 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Spacer content</p>
      </div>
      
      <InView>
        <div className="bg-yellow-100 p-6 text-center rounded-lg">
          <h3 className="text-xl font-bold text-yellow-800">Second InView Element</h3>
          <p className="text-yellow-600">This triggers independently</p>
        </div>
      </InView>
      
      <div className="h-64 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">More spacer content</p>
      </div>
      
      <InView>
        <div className="bg-purple-100 p-6 text-center rounded-lg">
          <h3 className="text-xl font-bold text-purple-800">Third InView Element</h3>
          <p className="text-purple-600">Each has its own intersection observer</p>
        </div>
      </InView>
    </div>
  ),
}

export const LazyLoadingSimulation: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Scroll down to see "lazy loaded" content</p>
      </div>
      
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item}>
          <InView>
            <div className="bg-indigo-100 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-indigo-300 rounded-full flex items-center justify-center">
                  <span className="text-indigo-800 font-bold">{item}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-800">
                    Lazy Loaded Item {item}
                  </h4>
                  <p className="text-indigo-600">
                    This content "loads" when it comes into view
                  </p>
                </div>
              </div>
            </div>
          </InView>
          <div className="h-32"></div>
        </div>
      ))}
    </div>
  ),
}

export const CardLayout: Story = {
  render: () => (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <InView key={item}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Card {item}
              </h3>
              <p className="text-gray-600 text-sm">
                This card is wrapped in InView component for intersection observation.
              </p>
            </div>
          </InView>
        ))}
      </div>
    </div>
  ),
}

export const ImagePlaceholder: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div className="h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Scroll down to see image placeholders</p>
      </div>
      
      {['mountain', 'ocean', 'forest', 'desert', 'city'].map((theme) => (
        <div key={theme}>
          <InView>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📷</span>
                  </div>
                  <p className="text-gray-600 capitalize">Loading {theme} image...</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
                  {theme} Photography
                </h3>
                <p className="text-gray-600">
                  Beautiful {theme} scenery would load here when this component comes into view.
                </p>
              </div>
            </div>
          </InView>
          <div className="h-16"></div>
        </div>
      ))}
    </div>
  ),
}

export const MinimalExample: Story = {
  args: {
    children: (
      <div className="p-4 bg-gray-50 rounded">
        <p>Simple content in InView wrapper</p>
      </div>
    ),
  },
}

export const LongScrollExample: Story = {
  render: () => (
    <div className="p-4">
      <div className="h-screen bg-gradient-to-b from-red-100 to-red-200 flex items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-red-800">Start Here - Scroll Down</h2>
      </div>
      
      <div className="h-screen bg-gradient-to-b from-orange-100 to-orange-200 flex items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-orange-800">Keep Scrolling</h2>
      </div>
      
      <InView>
        <div className="h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-4">🎉 You Found It!</h2>
            <p className="text-xl text-green-700">This content triggered when it came into view</p>
          </div>
        </div>
      </InView>
      
      <div className="h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-blue-800">The End</h2>
      </div>
    </div>
  ),
}
