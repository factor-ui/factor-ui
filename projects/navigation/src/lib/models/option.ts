export interface Option {
  children?: Option[];
  class?: string;
  click?: () => void;
  disabled?: boolean;
  iconCollection?: string;
  iconName?: string;
  id?: string;
  label?: string;
  url?: string;
  type?: string
}
