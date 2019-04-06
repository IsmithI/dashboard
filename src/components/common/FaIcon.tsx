
export interface IFaIconProps {
  children: string;
}

export const FaIcon = ({ children }: IFaIconProps) => (
  <i className={`fas fa-${children}`}></i>
)