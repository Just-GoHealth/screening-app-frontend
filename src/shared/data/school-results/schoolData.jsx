import { FcHighPriority, FcSearch } from 'react-icons/fc';
import { family, meditation, siren } from '../../../assets/images';
import { Bullet } from '../../components/health-results/helpers/Bullet';

export const screeningReport = [
	{ title: 'Mild Signs & Symptoms', bullet: <Bullet /> },
	{ title: 'Moderate Stressors/ Triggers', bullet: <Bullet /> },
	{ title: 'No Significant Risk Factors', bullet: <Bullet /> },
	{ title: 'Strong Mental Health Support System', bullet: <Bullet /> },
	{
		title: 'Suicidal Thoughts (No Plan)',
		bullet: <FcHighPriority className="inline mb-1" />,
	},
];

export const recommendations = [
	{
		title: 'Workshop',
		body: 'Participate in group talk therapy and learn mindfulness techniques to effectively manage stress.',
		icon: <img src={meditation} className="w-10 h-10" />,
		apiID: 'workshop',
	},
	{
		title: 'Further Evaluation',
		body: 'Complete a comprehensive assessment to further understand and identify the prescence of any potential mental health disorders.',
		icon: <FcSearch className="w-10 h-10" />,
		apiID: 'further_evaluation',
	},
	{
		title: 'Family Therapy',
		body: "Engage in family therapy sessions to address and improve dysfunctional family dynamics that may be impacting the chil's well-being.",
		icon: <img src={family} className="w-10 h-10" />,
		apiID: 'family_therapy',
	},
	{
		title: 'Medical Attention (Emergency)',
		body: 'Seek immediate medical care to address urgent and critical mental health concerns. Urgently recommended.',
		icon: <img src={siren} className="w-10 h-10" />,
		apiID: 'medical_attention',
	},
];
