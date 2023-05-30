import { FcHighPriority, FcSearch } from 'react-icons/fc';
import { family, meditation, siren } from '../../../assets/images';
import { Bullet } from '../../components/health-results/helpers/Bullet';

export const screeningReport = [
	{
		title: 'Optimal Mental Health',
		bullet: <Bullet />,
		apiID: 'optimal_mental_health',
	},
	{
		title: 'Mild Mental Health Concern',
		bullet: <Bullet />,
		apiID: 'mild_mental_health_concern',
	},
	{
		title: 'Moderate Mental Health Concern',
		bullet: <Bullet />,
		apiID: 'moderate_mental_health_concern',
	},
	{
		title: 'Severe Mental Health Concern',
		bullet: <Bullet />,
		apiID: 'severe_mental_health_concern',
	},
	{
		title: 'Suicidal Thoughts',
		bullet: <FcHighPriority className="inline mb-1" />,
		apiID: 'suicidal_thoughts',
		score: 'None',
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
