import { ArrowRight } from 'lucide-react'


// function CircularProgressWithLabel(
//   props: CircularProgressProps & { value: number },
// ) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       {/* Серый фон (незаполненная часть) */}
//       <CircularProgress
//         variant="determinate"
//         value={100}
//         sx={{
//           color: '#E0E0E0',
//           position: 'absolute',
//         }}
//         size={90}
//         thickness={4}
//       />
//       {/* Основной прогресс (с закруглёнными краями) */}
//       <CircularProgress
//         variant="determinate"
//         {...props}
//         size={90}
//         thickness={4}
//         sx={{
//           // Закругляем края прогресса
//           '& .MuiCircularProgress-circle': {
//             strokeLinecap: 'round',
//           },
//           color: '#f2ea4a',
//           ...props.sx, // Сохраняем переданные стили
//         }}
//       />
//       {/* Текст с процентами */}
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           sx={{ color: 'white', fontSize: '1.3rem' }}
//         >{`${Math.round(props.value)}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }


const backgroundColors = [
	'#008ebb',
  '#008ebb'
]


interface ProjectProps {
  name: string
  description: string
  budget: number
  status: string
}

export function Project({ name, description, budget, status }: ProjectProps) {
  // Выбираем случайный цвет из массива
  const randomBackground = backgroundColors[
    Math.floor(Math.random() * backgroundColors.length)
  ]

  // Цвет для внутренних элементов
  const lighterBg = `${randomBackground.replace('#', '')}40`
  const textColor = '#FFFFFF'
  const secondaryTextColor = `${textColor}CC`

  // Форматируем бюджет (1,000,000 вместо 1000000)
  const formattedBudget = new Intl.NumberFormat('en-US').format(budget)

  // Функция для преобразования статуса в читаемый вид
  const getStatusDisplay = (status: string) => {
    switch(status) {
      case 'in_progress':
        return 'In Progress'
      case 'completed':
        return 'Completed'
      case 'planned':
        return 'Planned'
      default:
        return status
    }
  }

  return (
    <div style={{ 
      background: randomBackground, 
      padding: '20px', 
      borderRadius: '25px', 
      marginTop: '10px', 
      color: textColor,
      transition: 'background 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '20px'
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ 
            margin: '0', 
            padding: '0', 
            fontSize: '18px',
            fontWeight: '600'
          }}>
            {name}
          </h1>
          <p style={{ 
            margin: '8px 0 0 0',
            color: secondaryTextColor,
            fontSize: '14px'
          }}>
            {description}
          </p>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '15px'
          }}>
            <div style={{
              background: lighterBg,
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              ${formattedBudget}
            </div>
            
            <div style={{
              background: lighterBg,
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              {getStatusDisplay(status)}
            </div>
          </div>
        </div>
        
        <div style={{ 
          background: lighterBg,
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}>
          <ArrowRight size={20} color={textColor} />
        </div>
      </div>
    </div>
  )
}


// export function Project() {
//   // Выбираем случайный цвет из массива
//   const randomBackground = backgroundColors[
//     Math.floor(Math.random() * backgroundColors.length)
//   ]

//   // Цвет для внутренних элементов (автоматически вычисляется как более светлый тон)
//   const lighterBg = `${randomBackground.replace('#', '')}40`;
//   const textColor = '#FFFFFF' // белый текст для контраста
//   const secondaryTextColor = `${textColor}CC` // слегка прозрачный белый

//   return (
//     <div style={{ 
//       background: randomBackground, 
//       padding: '20px', 
//       boxSizing: 'border-box', 
//       borderRadius: '25px', 
//       marginTop: '10px', 
//       color: textColor,
//       transition: 'background 0.3s ease',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     }}>
//       <div>
//       <div>
//         <h1 style={{ margin: '0', padding: '0', color: 'white' }}>OZZO</h1>
//         <span style={{ color: secondaryTextColor }}>telegram web app</span>
//       </div>

//       <div style={{ 
//         width: '140px', 
//         background: lighterBg, 
//         borderRadius: '25px', 
//         display: 'flex', 
//         alignItems: 'center', 
//         marginTop: '15px',
//         cursor: 'pointer',
//       }}>
//         <div style={{ 
//           background: 'white', 
//           padding: '10px', 
//           borderRadius: '100%', 
//           width: '25px', 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           marginRight: '7px' 
//         }}>
//           <ArrowRight color='black' />
//         </div>
//         <span>Details</span>
//       </div>
//       </div>
//       <div>
//         <CircularProgressWithLabel value={15} />
//       </div>
//     </div>
//   )
// }