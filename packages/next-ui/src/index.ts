// Export all custom NextUI-based components
export { Button } from './button'
export { ButtonIcon } from './button-icon'
export { Text } from './text'
export { SelectMultiple } from './select-multiple'
export { default as FilterList } from './filter-list'
export { ColorRadioGroup } from './color-radio-group'
export { SizeRadioGroup } from './size-radio-group'
export { InView } from './in-view'
export { Profile } from './profile'
export { Pagination } from './pagination'
// Re-export hooks from shared hooks package
export { usePagination, DOTS } from '@repo/hooks'

// Re-export ALL NextUI components that web-next uses
export {
  Button as NextUIButton,
  Card,
  Input,
  Select,
  SelectItem,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  Skeleton,
  NextUIProvider,
  Textarea,
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar,
} from '@nextui-org/react'

// Re-export NextUI system components
export { NextUIProvider as NextUISystemProvider } from '@nextui-org/system'

// Export types
export type { ButtonProps } from '@nextui-org/react'

// Export themes for easy access
export * from './themes'
