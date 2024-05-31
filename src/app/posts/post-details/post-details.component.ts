import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: { id: number, title: string, content: string, imageUrl: string } = { id: 0, title: '', content: '', imageUrl: '' };
  posts = [
    { id: 1, title: 'Explorando las Montañas', content: 'Descubre la belleza y los desafíos del senderismo en las montañas. Consejos para principiantes y expertos.', 
    imageUrl: 'https://static.nationalgeographic.es/files/styles/image_3200/public/03_25.jpg?w=1900&h=1425'},
    { id: 2, title: 'El Arte de la Cocina Gourmet', content: 'Sumérgete en el mundo de la cocina gourmet. Aprende sobre las últimas tendencias y técnicas atemporales en el arte culinario.', 
    imageUrl: 'https://cdn-ehflo.nitrocdn.com/UOvVgTOyzUrmhYwfcXfLEQcHpnXvZZvZ/assets/images/optimized/rev-550d19d/www.vipealo.com/blog/wp-content/uploads/2022/02/AdobeStock_233493567-1.jpeg' },
    { id: 3, title: 'Innovaciones Tecnológicas en 2024', content: 'Un análisis profundo de los avances tecnológicos más innovadores del año. Qué esperar y cómo prepararse.', 
    imageUrl: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/01/03/inteligencia-artificial.jpeg' },
    { id: 4, title: 'Prácticas de Vida Sostenible', content: 'Explora formas prácticas e impactantes de vivir de manera sostenible. Desde consejos para reducir residuos hasta soluciones de energía renovable.', 
    imageUrl: 'https://media.admagazine.com/photos/618a61c851ab72df0a764121/master/w_1600%2Cc_limit/81808.jpg' },
    { id: 5, title: 'Dominando la Fotografía Digital', content: 'Consejos esenciales para capturar fotografías impresionantes. Una guía para principiantes y fotógrafos experimentados.', 
    imageUrl: 'https://static.mercadonegro.pe/wp-content/uploads/2018/12/22193508/NOTA-3.png' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    const foundPost = this.posts.find(p => p.id === postId);
    if (foundPost) {
      this.post = { ...foundPost, imageUrl: foundPost.imageUrl || '' };
    }
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
