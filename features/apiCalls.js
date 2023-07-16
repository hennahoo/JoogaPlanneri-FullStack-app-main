export const toggleTodoInDatabase = async (todo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": todo.text,
        "completed": todo.completed,
        "id": todo.id,
        "createdAt": todo.date
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/todo", requestOptions)
        .catch(error => console.log('error', error));
}

export const deleteTodoInDatabase = async (todo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": todo.text,
        "completed": todo.completed,
        "id": todo.id,
        "createdAt": todo.date
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/todo", requestOptions)
        .catch(error => console.log('error', error));
}

export const createTodoInDatabase = async (todo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": todo.text,
        "completed": todo.completed,
        "id": todo.id,
        "createdAt": todo.date,
        "userId": todo.userId
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/todo", requestOptions)
        .catch(error => console.log('error', error));
}

/////////////////////////////////////////////////////////////////////////////
//  POSE
/////////////////////////////////////////////////////////////////////////////
export const togglePoseInDatabase = async (pose) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "PoseId": pose.PoseId,
        "PoseName": pose.PoseName,
        "PoseCreateDate": pose.PoseCreateDate,
        "PoseOtherInformation": pose.PoseOtherInformation
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/todo", requestOptions)
        .catch(error => console.log('error', error));
}

export const deletePoseInDatabase = async (pose) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "PoseId": pose.PoseId,
        "PoseName": pose.PoseName,
        "PoseCreateDate": pose.PoseCreateDate,
        "PoseOtherInformation": pose.PoseOtherInformation
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/todo", requestOptions)
        .catch(error => console.log('error', error));
}

export const createPoseInDatabase = async (pose) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "PoseId": pose.PoseId,
        "PoseName": pose.PoseName,
        "PoseCreateDate": pose.PoseCreateDate,
        "PoseOtherInformation": pose.PoseOtherInformation
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/todo", requestOptions)
        .catch(error => console.log('error', error));
}



export const changePassword = async (oldPassword, newPassword) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "password": newPassword,
        "oldPassword": oldPassword
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("/api/auth/change-password", requestOptions)
        .catch(error => console.log('error', error));
}
