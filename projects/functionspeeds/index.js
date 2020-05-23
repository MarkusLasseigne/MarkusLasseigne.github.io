let fForL = function(a){
	let r={};
	for(let i=0;i<a.length;i++){
		r[i]=a[i];
	}
	console.log(r);
	return r;
};
let fForE = function(a){
	let r={};
	a.forEach(function(a,b){
		r[b]=a;
	});
	console.log(r);
	return r;
};
var fS=[fForE, fForL];