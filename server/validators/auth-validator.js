const {z}=require('zod');

const loginSchema=z.object({
   email:z
   .string({required_error:'Email is required'})
   .trim()
   .email({message:'Invalid email address'})
   .min(3,{message:'email must be at least of 3 character.'})
   .max(255,{message:'Name must not be more than 255 character'}),
   password:z
   .string({required_error:'Password is required'})
   .trim()
   .min(8,{message:'password must be at least of 8 chars.'})
   .max(25,{message:'Password must not be more than 25 character'}),
})

// creating an object schema
const signupSchema=loginSchema.extend({
   username:z
   .string({required_error:'Name is required'})
   .trim()
   .min(3,{message:'Name must be at least of 3 character.'})
   .max(255,{message:'Name must not be more than 255 character'}),
   phone:z
   .string({required_error:'Phone number is required'})
   .trim()
   .min(10,{message:'Phone number must be at least of 10 chars.'})
   .max(12,{message:'Phone number must not be more than 12 character'}),
   
});

module.exports={signupSchema,loginSchema};