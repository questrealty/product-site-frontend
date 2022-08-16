<template>
    <div class="contact-agents-container">
        <h3>Contact Agents</h3>
        <ul>
            <li v-for="(agent, index) in agents" :key="index" class="contact-card">
                <p class="contact-item">{{ agent.companyName}}</p>
                <p class="contact-item">{{ agent.name}}</p>
                <p class="contact-item">{{ agent.contact}}</p>
            </li>
        </ul>
        <button class="contact-item">See more agents</button>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            agents: [
                {
                    companyName: "Company Name",
                    name: "Agent Name",
                        contact: "Agent Contacts"
                },
                    {
                    companyName: "Company Name",
                    name: "Agent Name",
                        contact: "Agent Contacts"
                    },
                    {
                    companyName: "Company Name",
                    name: "Agent Name",
                        contact: "Agent Contacts"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.contact-agents-container{
    width: 100%;
    /* display: flex;
    flex-direction: column; */
}
ul{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
}
h3{
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
}
.contact-card{
    background-color: var(--barley-40);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 15px;
}
.contact-item{
    color: white;
    font-weight: 600;
    font-size: .9rem;
}
button{
    width: 100%;
    margin-top: 20px;
    background-color: var(--barley-40);
    padding: 10px;
    border-radius: 5px;
    border: none;
}
</style>