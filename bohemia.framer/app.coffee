flow = new FlowComponent
flow.showNext(homeScreen)
flow.header = statusBar

onboarding.onTap ->
	flow.showPrevious(homeScreen)

homeScreen.onTap ->	
	flow.showNext(profileScreen)
	
	
profile_map.onTap ->
	flow.showNext(mapScreen)
	
profile_challenge.onTap ->
	flow.showNext(challengeScreen)
	
	
	
challenge_map.onTap ->
	flow.showNext(mapScreen)

challenge_profile.onTap ->
	flow.showPrevious(profileScreen)
	
	
	
map_challenge.onTap ->
	flow.showPrevious(challengeScreen)
	
map_profile.onTap ->
	flow.showPrevious(profileScreen)


bar_profile.onTap ->
	flow.showPrevious(profileScreen)
	
bar_challenge.onTap ->
	flow.showPrevious(challengeScreen)	
	
bar_map.onTap ->
	flow.showPrevious(mapScreen)	
	
	
money.onTap ->
	flow.showNext(mapScreen)
	
bar_do_juarez.onTap ->	
	flow.showNext(barScreen)

juarez.onTap ->
	flow.showNext(barScreen)
	