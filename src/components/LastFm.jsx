const LastFm = () => {
	return (
		<>
			<div className="relative hidden xl:flex xl:flex-col">
				<a href="https://www.last.fm/user/bopieee754">
					<img
						src="https://lastfm-recently-played.vercel.app/api?user=bopieee754"
						className="bottom-0 right-0 w-[300px] fixed m-4 tooltip tooltip-left"
						data-tip="Visit my Last.fm Page!"
					/>
				</a>
			</div>
		</>
	);
}

export default LastFm;