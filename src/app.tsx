import Component from "@hurx/core/library/framework/apps/frontend/components/component/component"
import VDOM from "@hurx/core/library/framework/apps/frontend/vdom/vdom"
import Button from "./components/button/button"
import Logo from "./logo.svg"

export interface AppState {
    clicks: number
}

/**
 * This component is the entry point for the application.
 */
export default class App extends Component<any, AppState> {
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
                    <img src={Logo} />
                </div>
                <div id="app-click-count">
                    You clicked {this.state.clicks} times!
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