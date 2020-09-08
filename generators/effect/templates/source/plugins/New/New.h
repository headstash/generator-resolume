#pragma once
#include <string>
#include <FFGLSDK.h>

class <%= title %> : public ffglqs::Effect
{
public:
	<%= title %>();
	~<%= title %>();

private:
	ffglex::FFGLShader shader;  //!< Utility to help us compile and link some shaders into a program.
	ffglex::FFGLScreenQuad quad;//!< Utility to help us render a full screen quad.
};
