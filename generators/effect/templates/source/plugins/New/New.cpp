#include "<%= title %>.h"
using namespace ffglex;
using namespace ffglqs;

static CFFGLPluginInfo PluginInfo(
	PluginFactory< <%= title %> >,// Create method
	"SH00",                  // Plugin unique ID of maximum length 4.
	"<%= title %>",         // Plugin name
	2,                       // API major version number
	1,                       // API minor version number
	1,                       // Plugin major version number
	0,                       // Plugin minor version number
	FF_EFFECT,               // Plugin type
	"",                      // Plugin description
	""                       // About
);

static const std::string fragmentShaderCode = R"(
#define PI 3.141592653589793
#define TWPI 6.283185307179586
uniform sampler2D InputTexture;

void main()
{
    vec2 fragCoord = gl_FragCoord.xy;
    fragColor = mix(vec4(1.0), texture(InputTexture, i_uv), param);
}
)";

<%= title %>::<%= title %>()
{
	// Input properties
	SetMinInputs( 1 );
	SetMaxInputs( 1 );

	SetFragmentShader( fragmentShaderCode );
	AddParam( Param::Create( "param" ) );
}
<%= title %>::~<%= title %>()
{
}
