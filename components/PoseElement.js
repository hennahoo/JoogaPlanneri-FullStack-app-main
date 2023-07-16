import { useDispatch } from "react-redux"
import { poseActions } from "features/poseSlice"

const PoseElement = (props) => {
    const dispatch = useDispatch()
    const pose = props.pose
    return (
        <div key={pose.id} className="poseElement">
            <>
                <p>{pose.id}</p>
                <p>{pose.name}</p>
            </>
        </div>
    )
}

export default PoseElement


