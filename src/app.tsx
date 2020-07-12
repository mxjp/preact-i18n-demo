import { h, Component } from "preact";
import { T, TX } from "./i18n";

interface AppState {
	seconds: number;
}

export class App extends Component<{}, AppState> {
	private timer?: number;

	public constructor() {
		super();
		this.state = {
			seconds: 0
		};
	}

	public componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				seconds: (this.state.seconds + 1) % 4
			});
		}, 1000);
	}

	public componentWillUnmount() {
		clearInterval(this.timer);
	}

	public render(props: any, state: AppState) {
		return <div>
			<h1>
				<T id="0" value="Hello World!" />
			</h1>

			<TX id="1" value={["{count} second", "{count} seconds"]} count={state.seconds} fields={{ count: String(state.seconds) }} />
		</div>
	}
}
