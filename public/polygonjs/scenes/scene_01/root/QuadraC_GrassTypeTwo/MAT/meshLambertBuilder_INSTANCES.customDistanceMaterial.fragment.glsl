
// INSERT DEFINES

#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>



	// /QuadraC_GrassTypeTwo/MAT/meshLambertBuilder_INSTANCES/constant2
	vec3 v_POLY_constant2_val = vec3(0.004391442035325718, 0.4019777798219466, 0.035601314869097636);
	
	// /QuadraC_GrassTypeTwo/MAT/meshLambertBuilder_INSTANCES/output1
	diffuseColor.xyz = v_POLY_constant2_val;




	// INSERT BODY

	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
