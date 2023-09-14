import Component, { ComponentProps } from "@hurx/core/library/framework/apps/frontend/components/component/component"
import VDOM from "@hurx/core/library/framework/apps/frontend/vdom/vdom"
import Logo from '../../logo.svg'

/**
 * The props for button
 */
export interface ButtonProps extends ComponentProps {
    /**
     * The callback for when the button has been clicked
     */
    onClick: () => void
}

/**
 * Represents a button
 */
export default class Button extends Component<ButtonProps> {
    public render() {
        return (
            <button class="button" onClick={() => {
                this.props.onClick()
            }}>
                {
                    this.children
                }
            </button>
        )
    }
}