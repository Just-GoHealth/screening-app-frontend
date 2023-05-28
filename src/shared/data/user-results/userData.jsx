import { FcSearch } from 'react-icons/fc';
import { family, meditation, siren } from '../../../assets/images';

export const recommendations = [
	{
		title: 'Workshop',
		body: 'Participate in group talk therapy and learn mindfulness techniques to effectively manage stress.',
		icon: <img src={meditation} className="w-10 h-10" />,
	},
	{
		title: 'Further Evaluation',
		body: 'Complete a comprehensive assessment to further understand and identify the prescence of any potential mental health disorders.',
		icon: <FcSearch className="w-10 h-10" />,
	},
	{
		title: 'Family Therapy',
		body: "Engage in family therapy sessions to address and improve dysfunctional family dynamics that may be impacting the child's well-being.",
		icon: <img src={family} className="w-10 h-10" />,
	},
	{
		title: 'Medical Attention (Emergency)',
		body: 'Seek immediate medical care to address urgent and critical mental health concerns. Urgently recommended.',
		icon: <img src={siren} className="w-10 h-10" />,
	},
];
