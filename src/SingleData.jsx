export default function SingleData({ single }) {
    const { userId, id, title, completed } = single
    return (
        <div className="body">
            <h4>Single data: {userId}</h4>
            <p>Id: {id}</p>
            <p>title: {title}</p>
            <p>completed: {completed}</p>
        </div>
    )
}