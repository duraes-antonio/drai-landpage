import { Section } from '../types/section';
import { pathFolderImages } from './paths';

export const sections: Section[] = [
    {
        title: 'Mais que um sistema, um assistente',
        description:
            'Tenha um companheiro treinado para te auxiliar na análise por imagem, a qualquer momento, onde quer que esteja e em qualquer dispositivo',
        imagePath: `${pathFolderImages}section-1.svg`,
    },
    {
        title: 'Informações assertivas e centralizadas',
        description:
            'Visualize as principais informações do processamento das imagens e as receba em um documento organizado e de fácil leitura',
        imagePath: `${pathFolderImages}section-2.svg`,
    },
    {
        title: 'Base de dados rica e global',
        description:
            'Desfrute de um modelo treinado com milhares de imagens obtidas dos mais diversos pacientes, pelo mundo inteiro, todo esse poder disponível em um único lugar',
        imagePath: `${pathFolderImages}section-3.svg`,
    },
    {
        title: 'Precisão significativa',
        description:
            'Tenha acesso a informações como prababilidade de manifestações de doenças, possíveis patógenos e principais regiões de interesse em órgãos como pulmão, coração e cérebro',
        imagePath: `${pathFolderImages}section-4.svg`,
    },
];
