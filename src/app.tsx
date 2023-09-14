import Component, { ComponentProps } from "../../../library/framework/apps/frontend/components/component/component"
import VDOM from "../../../library/framework/apps/frontend/vdom/vdom"

interface ButtonProps extends ComponentProps {
    onClick: () => void
}

class Button extends Component<ButtonProps> {
    public render() {
        return (
            <button class="button" onClick={() => {
                this.props.onClick()
            }}>
                {
                    this.props.children
                }
            </button>
        )
    }
}

interface AppState {
    clicks: number
}

class App extends Component<any, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            clicks: 0
        }
    }
    public render() {
        return (
            <div id="app">
                <div id="app-title">
                    Hello there, you clicked {this.state.clicks} times!
                </div>
                <div id="app-button">
                    <Button onClick={() => {
                        this.state.clicks ++
                    }}>
                        Click me!
                    </Button>
                </div>
            </div>
        )
    }
}

new VDOM('main', (
    <App />
))