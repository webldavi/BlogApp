export default ({store, redirect, next}) =>{
	const currentPost = store.getters['post/getCurrentPostInFocus']
	if(Object.keys(currentPost).length == 0){
		return redirect(204 , "/feed")
	}
}