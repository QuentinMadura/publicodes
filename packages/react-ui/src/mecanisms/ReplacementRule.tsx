import { ReplacementRule } from 'publicodes/src/replacement'
import Explanation from '../Explanation'

export default function ReplacementMecanism(node: ReplacementRule) {
	return (
		<span>
			Remplace <Explanation node={node.replacedReference} />{' '}
			{node.rawNode.dans && (
				<>
					dans{' '}
					{node.whiteListedNames
						.map((child, i) => <Explanation key={i} node={child} />)
						.join(', ')}
				</>
			)}
			{node.rawNode['sauf dans'] && (
				<>
					sauf dans{' '}
					{node.blackListedNames
						.map((child, i) => <Explanation key={i} node={child} />)
						.join(', ')}
				</>
			)}
		</span>
	)
}
