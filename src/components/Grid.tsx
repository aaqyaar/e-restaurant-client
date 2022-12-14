export default function Grid(
  props: {
    children: React.ReactNode;
    className?: string;
    container?: boolean;
    xs?: boolean | number | 'auto' | undefined;
    sm?: boolean | number | 'auto' | undefined;
    md?: boolean | number | 'auto' | undefined;
    lg?: boolean | number | 'auto' | undefined;
    xl?: boolean | number | 'auto' | undefined;
    spacing?: number;
    direction?: 'row' | 'column';
    justify?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'stretch'
      | 'space-between'
      | 'space-around';
    placeContent?: 'center' | 'start' | 'end';

    placeItems?: 'center' | 'start' | 'end';
  } & React.HTMLAttributes<HTMLDivElement>
) {
  const {
    children,
    className,
    container,
    xs,
    sm,
    md,
    lg,
    xl,
    spacing,
    direction,
    justify,
    alignItems,
    alignContent,
    placeContent,
    placeItems,
    ...other
  } = props;

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  };
  const gridDirection =
    direction === 'column' ? 'cols' : direction === 'row' ? 'rows' : 'cols';
  const classes = classNames(
    className,
    container && 'grid',
    xs !== undefined && `grid-${gridDirection}-${xs}`,
    sm !== undefined && `sm:grid-${gridDirection}-${sm || xs}`,
    md !== undefined && `md:grid-${gridDirection}-${md || sm}`,
    lg !== undefined && `lg:grid-${gridDirection}-${lg || md || sm}`,
    xl !== undefined && `xl:grid-${gridDirection}-${xl || lg || md || sm}`,
    spacing !== undefined && `gap-${spacing}`,
    justify !== undefined && `justify-${justify}`,
    alignItems !== undefined && `items-${alignItems}`,
    alignContent !== undefined && `content-${alignContent}`,
    placeContent !== undefined && `place-content-${placeContent}`,
    placeItems !== undefined && `place-items-${placeItems}`
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}
