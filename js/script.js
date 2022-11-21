gsap.config({ trialWarn: false });
let select = (s) => document.querySelector(s),
	selectAll = (s) => document.querySelectorAll(s),
	toArray = (s) => gsap.utils.toArray(s),
	mainSVG = select("#mainSVG"),
	colorArray = [
		"#f94144",
		"#f65a38",
		"#f3722c",
		"#f8961e",
		"#f9af37",
		"#f9c74f",
		"#90be6d",
		"#43aa8b",
		"#4d908e",
		"#577590"
	].reverse(),
	strokeColorArray = [
		"#f94144",
		"#f8961e",
		"#f9c74f",
		"#90be6d",
		"#4d908e",
		"#577590"
	].reverse();

let ringEase = CustomEase.create("custom", "M0,0 C0.484,0.274 0.79,0.698 1,1 ");
let ringRadialEase = CustomEase.create("custom", "M0,0 C0,0.908 0.78,1 1,1 ");

gsap.set("svg", {
	visibility: "visible"
});
gsap.set(".ring", {
	fill: gsap.utils.wrap(colorArray)
});
/* gsap.set('#splashLines path', {
	stroke: gsap.utils.wrap(strokeColorArray),
	drawSVG: '0% 0%'
}) */
gsap.set(["#dot", "#i", "#leftChars path", "#rightChars path"], {
	transformOrigin: "50% 100%"
});
gsap.set(["#rightChars g", "#leftChars g"], {
	transformOrigin: "50% 50%"
});
let tl = gsap.timeline({
	repeat: -1
});
tl
	.add("idrop")
	.fromTo(
		"#i",
		{
			y: -380
		},
		{
			y: 0,
			duration: 0.13,
			ease: "sine.in"
		},
		"idrop"
	)
	.fromTo(
		"#i",
		{
			scaleX: 0.2,
			scaleY: 1.8
		},
		{
			scaleX: 1,
			scaleY: 1,
			duration: 1.4,
			ease: "elastic(0.83, 0.3)"
		},
		"idrop"
	)
	.add("drop", "-=1")
	.fromTo(
		"#dot",
		{
			y: -300
		},
		{
			y: 20,
			duration: 0.13,
			ease: "sine.in"
		},
		"drop"
	)
	.fromTo(
		"#dot",
		{
			scaleX: 1.5,
			scaleY: 0.5
		},
		{
			scaleX: 1,
			scaleY: 1,
			duration: 1,
			ease: "elastic(0.83, 0.13)"
		},
		"drop"
	)
	.to(
		"#i",
		{
			duration: 0.2,
			scaleX: 1.5,
			scaleY: 0.5,
			ease: "sine",
			repeat: 1,
			yoyo: true
		},
		"drop+=0.12"
	)
	.add("endDotDrop", "-=0.5")
	.add("addChars", "-=0.1")
	.from(
		"#leftChars g",
		{
			x: gsap.utils.wrap([350, 250, 150]),
			stagger: 0.06,
			ease: "expo"
		},
		"addChars"
	)
	.from(
		"#leftChars g",
		{
			duration: 0.25,
			scale: 0.5,
			stagger: 0.06,
			ease: "sine.in"
		},
		"addChars"
	)
	.from(
		"#leftChars path",
		{
			duration: 1,
			rotation: "random(0, 90)",
			ease: "elastic(0.9, 0.53)",
			stagger: 0.06
		},
		"addChars"
	)
	.from(
		"#leftChars path",
		{
			duration: 1.5,
			scaleX: 1.5,
			scaleY: 0.5,
			ease: "elastic(0.85, 0.3)",
			stagger: 0.1
		},
		"addChars"
	)
	.from(
		"#rightChars g",
		{
			duration: 0.25,
			scale: 0.5,
			stagger: 0.06,
			ease: "sine.in"
		},
		"addChars"
	)
	.from(
		"#rightChars g",
		{
			x: gsap.utils.wrap([-300, -200, -100]),
			stagger: 0.06,
			ease: "expo"
		},
		"addChars"
	)
	.from(
		"#rightChars path",
		{
			duration: 1,
			rotation: "random(-90, 0)",
			ease: "elastic(0.9, 0.53)",
			stagger: 0.06
		},
		"addChars"
	)
	.from(
		"#rightChars path",
		{
			duration: 1.25,
			scaleX: 1.5,
			scaleY: 0.5,
			ease: "elastic(0.95, 0.23)",
			stagger: 0.1
		},
		"addChars"
	)
	.add("dotEnd")
	.to(
		"#dot",
		{
			duration: 0.2,
			scaleX: 0.8,
			scaleY: 1.3,
			y: -100,
			ease: "sine"
		},
		"endDotDrop"
	)
	.to(
		"#dot",
		{
			duration: 0.2,
			y: 0,
			ease: "sine.in"
		},
		"endDotDrop+=0.2"
	)
	.to(
		"#dot",
		{
			duration: 1,
			scaleX: 1,
			scaleY: 1,
			ease: "elastic(1, 0.52)"
		},
		"endDotDrop+=0.2"
	)
	.to(
		"#i",
		{
			duration: 1.2,
			scaleX: 1.2,
			scaleY: 0.8,
			ease: "wiggle({wiggles: 7})"
		},
		"endDotDrop+=0.4"
	)

	.to(
		".ring",
		{
			duration: 3,
			attr: {
				r: gsap.utils.distribute({
					base: 10,
					amount: 300,
					from: "end",
					ease: ringEase
				})
			},

			stagger: {
				each: 0.1
			},
			opacity: 1,
			ease: ringRadialEase
		},
		"-=1.7"
	)
	.to(".believeText", {
		opacity: 0,
		ease: "power2.in"
	});
//ScrubGSAPTimeline(tl)
