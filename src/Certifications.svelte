<script>

let certs = [
    
    {
        url:'https://app.hubspot.com/academy/achievements/d6dv9nbh/en/1/joseph-reilly/hubspot-cms-for-developers',
		title: 'HubSpot CMS for Developers',
	 img:'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/9432013/880534a63ff5426a850d874b483ea9db-1639687727276.png'
     },
     {
        url:'https://app.hubspot.com/academy/achievements/dnkr8l2v/en/1/joseph-reilly/hubspot-cms-for-marketers',
      title: 'HubSpot CMS For Marketers',
   img:'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/9432013/62fa218947a04175bc713916e2d2d282-1618933858692.png'
   },
    {
        url:'https://app.hubspot.com/academy/achievements/g1x6jtsf/en/1/joseph-reilly/social-media-marketing-certification-course',
		title: 'Social Media Marketing Certification Course',
	 img:'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/9432013/2f91e1fd758d488c9c4cad078a8f2867-1620364971191.png'
     },

	{
        url:'https://app.hubspot.com/academy/achievements/8rbrfpdz/en/1/joseph-reilly/client-management',
		title: 'Client Management',
	 img:'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/9432013/8a4bebf8db8d4f40bb41bba7f28bda72-1618950396940.png'
     },
	{
        url:'https://app.hubspot.com/academy/achievements/r3qm1pts/en/1/joseph-reilly/delivering-client-success',
		title: 'Delivering Client Success',
	 img:'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/9432013/f92bfd3a53ed41b0b948c3cacec101cf-1619056834185.png'
     },
	{
        url:'https://app.hubspot.com/academy/achievements/rk030hjw/en/1/joseph-reilly/cms-hub-implementation',
		title: 'CMS Hub Implementation',
	 img:'https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/9432013/7b0aafda37f34568bb3aba27624f0d0c-1618436263585.png'
     },


]
</script>

<main>
	<h1><span>HubSpot</span> Certification Badges</h1>
	<div class="flex">
		{#each certs as cert}
		<div class='academy-badge'>
			<a href='{cert.url}' title='{cert.title}'>
			<img src={cert.img} alt="{cert.title}" />
			</a>
		</div>
		{/each}
    </div>	
</main>

<style>
 
    h1{font-size: 3vw!important;}
    span{
        color:#ff8f59;
    }
       .academy-badge{
        overflow: hidden;
    box-shadow: 0px 10px 50px 0px rgb(0 0 0 / 20%);
    border-radius: 15px;
    }
    .academy-badge:hover{
    box-shadow: 5px 5px 30px 0px rgb(0 0 0 / 25%);
    transition: 300ms;
    }
    .academy-badge img{
        max-width: 400px;
    }
	.flex{

        max-width: 1170px;
		display: flex;
		flex-wrap: wrap;
        gap:1em;
        justify-content: space-evenly;
	}

	main {
		
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #20021c;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 500;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	
	}

	@media (max-width: 640px) {
		
		.flex{
			display: block;
		}
		.flex > div{
		width: 100%;
	}
    .academy-badge img{
        max-width: 200px;
    }
	}
</style>