import About from '@/views/About.vue';
import Access from '@/views/Access.vue';
import Agenda from '@/views/Agenda.vue';
import Event from '@/views/Event.vue';
import Gallery from '@/views/Gallery.vue';
import Home from '@/views/Home.vue';
import Podcast from '@/views/Podcast.vue';
import Ticket from '@/views/Ticket.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/access',
    name: 'Access',
    component: Access,
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda,
  },
  {
    path: '/event/:eventId',
    name: 'Event',
    component: Event,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/podcast',
    name: 'Podcast',
    component: Podcast,
  },
  {
    path: '/ticket',
    name: 'Ticket',
    component: Ticket,
  },
];
