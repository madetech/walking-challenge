interface TotalDistanceProps {
    distance: number
}

const TotalDistance = ({distance}: TotalDistanceProps) => {
    return (
        <h4>Total distance walked by teams: {distance.toFixed(2)}km</h4>
    )
}

export default TotalDistance;