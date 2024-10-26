import { ElementType, ComponentPropsWithoutRef, ReactElement, SVGProps } from 'react';
import { PokeTypeId } from '@/lib/data-client/metadata';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare type PropsOf<T extends ElementType> = ComponentPropsWithoutRef<T>;
declare type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TypeIconCvaParams = {
    typeId: PokeTypeId;
    terastal?: boolean;
    filled?: boolean;
    colored?: boolean;
    rounded?: boolean;
    theme?: 'light' | 'dark';
    size?: Size;
};
type TypeIconCvaRecipe = (params: TypeIconCvaParams) => string;
type TypeIconProps = TypeIconCvaParams & PropsOf<'span'>;

declare function TypeIcon(props: TypeIconProps): ReactElement;

declare const SvgArrow: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBall: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgTeratype: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgBugType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgDarkType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgDragonType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgElectricType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgFairyType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgFightingType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgFireType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgFlyingType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgGhostType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgGrassType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgGroundType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgIceType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgNormalType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgPoisonType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgPsychicType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgRockType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgSteelType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const SvgWaterType: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

export { SvgArrow as Arrow, SvgBall as Ball, SvgBugType as BugType, SvgDarkType as DarkType, SvgDragonType as DragonType, SvgElectricType as ElectricType, SvgFairyType as FairyType, SvgFightingType as FightingType, SvgFireType as FireType, SvgFlyingType as FlyingType, SvgGhostType as GhostType, SvgGrassType as GrassType, SvgGroundType as GroundType, SvgIceType as IceType, SvgNormalType as NormalType, SvgPoisonType as PoisonType, SvgPsychicType as PsychicType, SvgRockType as RockType, SvgSteelType as SteelType, SvgTeratype as Teratype, TypeIcon, type TypeIconCvaParams, type TypeIconCvaRecipe, type TypeIconProps, SvgWaterType as WaterType };
