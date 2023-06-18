use rand;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

pub fn generate_testcase_j(caseid: u64) -> Vec<(i32, i32)> {
    let mut rng = ChaCha8Rng::seed_from_u64(caseid);
    let mut ret = Vec::new();
    for _ in 0..100 {
        ret.push((rng.gen_range(1..101), rng.gen_range(1..101)));
    }
    ret.push((0, 0));
    ret
}

fn modelans_j(testcase: &Vec<(i32, i32)>) -> Vec<i32> {
    let mut ret = Vec::new();
    for (x, y) in testcase {
        if *x == 0 && *y == 0 {
            break;
        }
        ret.push(*x + *y);
    }
    ret
}

pub fn validate_testcase_j(testid: u64, ans: &str) -> bool {
    let testcase = generate_testcase_j(testid);
    let modelans = modelans_j(&testcase);
    let mut vans = Vec::new();
    for line in ans.lines() {
        vans.push(line.parse::<i32>().unwrap());
    }
    vans == modelans
}
