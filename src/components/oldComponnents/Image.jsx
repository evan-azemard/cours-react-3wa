export const Image = () => {
	const img1 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1\n"
	const img2 = "https://www.zoologiste.com/images/main/lama.jpg"
	const bool = true;

	return (
		<img src={
			bool && img1 || img2
		} alt='Image'/>
	)
}