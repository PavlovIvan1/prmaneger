import Box from '@mui/material/Box'
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { Task } from './task'


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* Серый фон (незаполненная часть) */}
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          color: '#E0E0E0',
          position: 'absolute',
        }}
        size={60}
        thickness={4}
      />
      {/* Основной прогресс (с закруглёнными краями) */}
      <CircularProgress
        variant="determinate"
        {...props}
        size={60}
        thickness={4}
        sx={{
          // Закругляем края прогресса
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
          ...props.sx, // Сохраняем переданные стили
        }}
      />
      {/* Текст с процентами */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary', fontSize: '0.8rem' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}


export function Daily() {
	return (
		<>
			<div>
				<div   style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<h2 style={{color: '#1E1E1E', fontWeight: '500'}}>All projects</h2>
					<span style={{ color: '#246BFD' }}>see all</span>
				</div>
				<Task title={'Do programming'} time={'11:00 - 14:00'} progress={75} />
				<Task title={'Watch film'} time={'14:00 - 15:00'} progress={40} />
			</div>
		</>
	)
}