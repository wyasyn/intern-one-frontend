import React from 'react'

// StarRating component with Tailwind CSS
interface StarRatingProps {
  rating: number // Rating out of 5
}

const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5
  const filledStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0)

  return (
    <div className='flex items-center space-x-1'>
      {/* Render filled stars */}
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className='text-lg text-yellow-500'>
            ★
          </span>
        ))}

      {/* Render half star if needed */}
      {halfStar && <span className='text-lg text-yellow-500'>☆</span>}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className='text-lg text-muted-foreground/20'>
            ★
          </span>
        ))}
    </div>
  )
}

export default StarRating
