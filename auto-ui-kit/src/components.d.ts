/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppAuto {
    }
}
declare global {
    interface HTMLAppAutoElement extends Components.AppAuto, HTMLStencilElement {
    }
    var HTMLAppAutoElement: {
        prototype: HTMLAppAutoElement;
        new (): HTMLAppAutoElement;
    };
    interface HTMLElementTagNameMap {
        "app-auto": HTMLAppAutoElement;
    }
}
declare namespace LocalJSX {
    interface AppAuto {
    }
    interface IntrinsicElements {
        "app-auto": AppAuto;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-auto": LocalJSX.AppAuto & JSXBase.HTMLAttributes<HTMLAppAutoElement>;
        }
    }
}
