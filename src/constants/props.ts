export interface Task2ContainerProps {
id: number;
heading: string;
sub_heading: string;
description: string;
bg_color: string;
icons: string;
text_alignment: 'left' | 'right' ;
  icon_position: 'left' | 'right' | 'top' | 'bottom';

}

export  interface Task2ContainerHover {
    id: number;
    bg: string;
    content: Task2ContainerHoverContent[];
}

export interface Task2ContainerHoverContent {
    img: string;
    title: string;
    position? : string;     
}

export interface Task3ContainerProps {
  id: number;
  headingvalue: string;
  title: string;
  sub_title: string;
}

export interface task1ContainerProps {
 img: string,
 message?: string,
 hover?: 'text' | 'video',
 hover_text?: {
  text: string,
  name: string,
  sub: string
  },
  hover_video?: string,

}
