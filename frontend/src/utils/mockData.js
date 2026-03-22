import { 
  XCircle, 
  FileX, 
  AlertCircle, 
  DollarSign,
  CheckCircle,
  Users,
  Shield,
  Clock,
  TrendingUp,
  Briefcase,
  Heart,
  FileText,
  Edit,
  Search
} from 'lucide-react';

export const mockData = {
  problems: [
    {
      icon: '❌',
      title: 'Trámites complicados',
      description: 'Documentos confusos, requisitos poco claros y procesos burocráticos que te hacen perder tiempo.'
    },
    {
      icon: '🔄',
      title: 'Rechazos constantes',
      description: 'Solicitudes rechazadas una y otra vez sin explicación clara de qué hacer para solucionarlo.'
    },
    {
      icon: '❓',
      title: 'Falta de información',
      description: 'No sabes cuánto puedes retirar, qué documentos necesitas, ni cuánto tiempo tomará.'
    },
    {
      icon: '💰',
      title: 'Dinero detenido',
      description: 'Tu dinero está ahí, es tuyo, pero no puedes acceder a él cuando más lo necesitas.'
    }
  ],

  solutionSteps: [
    {
      title: 'Evaluación gratuita del caso',
      description: 'Analizamos tu situación sin costo y determinamos la mejor estrategia para tu retiro.'
    },
    {
      title: 'Gestión completa del trámite',
      description: 'Nos encargamos de toda la documentación, requisitos y seguimiento ante las instituciones.'
    },
    {
      title: 'Acompañamiento paso a paso',
      description: 'Te mantenemos informado en cada etapa del proceso con actualizaciones constantes.'
    },
    {
      title: 'Seguimiento hasta retiro exitoso',
      description: 'No descansamos hasta que tu dinero esté en tus manos de forma segura y legal.'
    }
  ],

  services: [
    {
      icon: <Briefcase className="w-8 h-8 text-brand" />,
      title: 'Retiro por desempleo',
      description: 'Si te quedaste sin trabajo, puedes acceder a parte de tu AFORE. Te ayudamos con todo el proceso.'
    },
    {
      icon: <Heart className="w-8 h-8 text-brand" />,
      title: 'Retiro por matrimonio',
      description: 'Al contraer matrimonio tienes derecho a un retiro. Gestionamos tu trámite de forma ágil.'
    },
    {
      icon: <FileText className="w-8 h-8 text-brand" />,
      title: 'Asesoría AFORE',
      description: 'Consultoría especializada para conocer tus opciones, saldo disponible y mejores decisiones.'
    },
    {
      icon: <Edit className="w-8 h-8 text-brand" />,
      title: 'Corrección de datos',
      description: 'Errores en tu expediente pueden bloquear tu retiro. Los corregimos rápidamente.'
    },
    {
      icon: <Search className="w-8 h-8 text-brand" />,
      title: 'Consulta de saldo',
      description: 'Te ayudamos a conocer exactamente cuánto tienes y cuánto puedes retirar.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand" />,
      title: 'Maximización de retiro',
      description: 'Estrategias legales para que obtengas el mayor beneficio posible de tu AFORE.'
    }
  ],

  trustFeatures: [
    {
      icon: <Users className="w-6 h-6 text-brand" />,
      title: 'Atención personalizada',
      description: 'Cada caso es único. Te asignamos un consultor dedicado que conoce tu situación.'
    },
    {
      icon: <Shield className="w-6 h-6 text-brand" />,
      title: 'Procesos seguros',
      description: 'Trabajamos bajo estrictos estándares de confidencialidad y seguridad de datos.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand" />,
      title: 'Experiencia comprobada',
      description: 'Más de 100 trámites exitosos en Oaxaca, zona costa, Mixteca y parte de Chiapas.'
    },
    {
      icon: <Clock className="w-6 h-6 text-brand" />,
      title: 'Rapidez garantizada',
      description: 'Optimizamos tiempos para que recibas tu dinero lo más pronto posible.'
    }
  ],

  results: [
    {
      icon: <Users className="w-12 h-12 text-brand" />,
      value: '+100',
      label: 'Clientes atendidos'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-brand" />,
      value: '+$2.5M',
      label: 'MXN recuperados'
    },
    {
      icon: <Clock className="w-12 h-12 text-brand" />,
      value: '15-30',
      label: 'Días promedio'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-brand" />,
      value: '95%',
      label: 'Tasa de éxito'
    }
  ],

  testimonials: [
    {
      name: 'María González',
      location: 'Oaxaca',
      text: 'Después de 3 intentos fallidos por mi cuenta, CONER logró mi retiro en menos de un mes. Su equipo fue muy profesional y me mantuvieron informada todo el tiempo. ¡Altamente recomendados!'
    },
    {
      name: 'Carlos Ramírez',
      location: 'Pinotepa Nacional',
      text: 'No tenía idea de que podía retirar dinero de mi AFORE por desempleo. CONER me asesoró gratuitamente y gestionó todo el trámite. Recuperé casi $30,000 pesos que realmente necesitaba.'
    },
    {
      name: 'Ana Patricia Martínez',
      location: 'Jamiltepec',
      text: 'El proceso fue mucho más rápido de lo que esperaba. En CONER se encargaron de toda la papelería y solo tuve que firmar algunos documentos. Excelente servicio.'
    },
    {
      name: 'Roberto Sánchez',
      location: 'Huajuapan de León',
      text: 'Tenía errores en mis datos del AFORE que me impedían hacer el retiro. CONER los corrigió y completó mi trámite en tiempo récord. Muy agradecido con su equipo.'
    },
    {
      name: 'Lupita Hernández',
      location: 'Tuxtepec',
      text: 'Contraté sus servicios por recomendación y no me arrepiento. Son honestos, transparentes y realmente se preocupan por ayudarte. Mi dinero llegó completo y sin problemas.'
    }
  ],

  faqs: [
    {
      question: '¿Cuánto dinero puedo retirar de mi AFORE?',
      answer: 'Depende del tipo de retiro. Por desempleo puedes retirar el equivalente a 90 días de tu último salario o el 11.5% de tu saldo, lo que sea menor. Por matrimonio, hasta 30 días de salario mínimo. En una evaluación gratuita analizamos tu caso específico y te decimos exactamente cuánto puedes obtener.'
    },
    {
      question: '¿Cuánto tiempo tarda el trámite?',
      answer: 'El tiempo promedio es de 15 a 30 días hábiles, dependiendo de la AFORE y del tipo de retiro. Algunos casos pueden resolverse más rápido. Nosotros aceleramos el proceso al máximo asegurándonos de que toda tu documentación esté perfecta desde el inicio.'
    },
    {
      question: '¿Es seguro y legal?',
      answer: 'Completamente. Todos nuestros servicios se realizan bajo el marco legal establecido por la CONSAR (Comisión Nacional del Sistema de Ahorro para el Retiro). No hacemos nada ilegal ni arriesgamos tu patrimonio. Trabajamos de forma transparente y profesional.'
    },
    {
      question: '¿Qué necesito para iniciar mi trámite?',
      answer: 'Generalmente necesitas: identificación oficial, CURP, NSS, estado de cuenta bancario, y documentos específicos según el tipo de retiro (acta de matrimonio, aviso de baja del IMSS, etc.). En la consulta inicial te damos la lista exacta para tu caso particular.'
    },
    {
      question: '¿Puedo hacerlo aunque ya lo intenté antes y me rechazaron?',
      answer: '¡Sí! De hecho, muchos de nuestros clientes llegaron después de rechazos previos. Analizamos por qué fue rechazado, corregimos los errores y presentamos una solicitud sólida. Nuestra experiencia nos permite identificar y resolver problemas que causan rechazos.'
    },
    {
      question: '¿Cuánto cuestan sus servicios?',
      answer: 'La evaluación inicial es completamente gratuita. Nuestros honorarios se cobran únicamente cuando tu retiro es exitoso, como un porcentaje del monto recuperado. Así garantizamos que solo pagás si realmente recibís tu dinero. Contáctanos para conocer las tarifas específicas.'
    }
  ]
};
