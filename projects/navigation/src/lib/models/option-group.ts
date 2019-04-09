import { Option } from './option';

export interface OptionGroup {
  children?: Option[];
  iconNameField?: string;
  iconCollection?: string;
  labelField?: string;
  type?: string;
}
